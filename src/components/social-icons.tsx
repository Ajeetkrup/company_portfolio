import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import React, { ReactNode } from 'react';

import { Button } from './ui/button';
import Link from 'next/link';

interface SocialIconProps {
  link: string;
  icon: ReactNode;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ link, icon }) => {
  return (
    <Link href={link}>
      <Button className='mx-auto flex text-lg flex-col items-center justify-center hover:bg-blue-500 transition duration-300 ease-in-out bg-[#112D4E]'>
        {icon}
      </Button>
    </Link>
  );
};

const SocialIcons: React.FC = () => {
  return (
    <div className='grid w-full max-w-[308px] grid-flow-col grid-cols-4  bg-zinc-50  '>
      <SocialIcon link='#' icon={<FaFacebook />} />
      <SocialIcon link='#' icon={<FaTwitter />} />
      <SocialIcon link='#' icon={<FaInstagram />} />
      <SocialIcon link='#' icon={<FaLinkedin />} />
    </div>
  );
};

export default SocialIcons;
