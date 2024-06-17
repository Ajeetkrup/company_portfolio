import ContactForm from '@/components/contact/ContactForm';
import React from 'react';

type Props = {};

const page = (props: Props) => {
  return (
	  <div className='w-full p-8'>
      <ContactForm />
    </div>
  );
};

export default page;
