'use client';

import { AiFillSkype } from 'react-icons/ai';
import { IoIosMail } from 'react-icons/io';
import Link from 'next/link';
import { MdOutlineDialerSip } from 'react-icons/md';

const ContactInfo = () => {
  return (
    <div className='font-sans'>
      <header className='text-center text-xl px-2 py-2 mb-3 bg-purple-600 rounded-3xl text-white'>
        <h1>Contact Us</h1>
      </header>

      <section className='flex flex-col items-start space-y-3 px-3'>
        <ContactDetail icon={<MdOutlineDialerSip />} text='+91 9525353534' />

        <ContactDetail icon={<MdOutlineDialerSip />} text='+91 9525353534' />

        <ContactDetail
          icon={<AiFillSkype />}
          text='gfxdevindia'
          link={`https://www.skype.com/${encodeURIComponent('gfxdevindia')}`}
        />

        <ContactDetail
          icon={<IoIosMail />}
          text='contact@gfxdevsolutions.com'
          link='mailto:contact@gfxdevsolutions.com'
        />
      </section>
    </div>
  );
};

const ContactDetail = ({ icon, text, link }: ContactDetailProps) => {
  return (
    <div className='flex items-center py-2 justify-center'>
      <span className='text-base text-[#4A55A2]'>{icon}</span>
      {link ? (
        <Link href={link} className='text-lg ml-2 text-[#4A55A2]'>
          {text}
        </Link>
      ) : (
        <span className='text-base text-[#4A55A2] ml-2'>{text}</span>
      )}
    </div>
  );
};

interface ContactDetailProps {
  icon: React.ReactNode;
  text: string;
  link?: string;
}

export default ContactInfo;
