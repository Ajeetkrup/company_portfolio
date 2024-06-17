'use client';

import { Loader } from 'lucide-react';

export const LoaderSpinner = () => {
  return (
    <div className='w-screen justify-center flex items-center'>
		  <Loader size={48} className='animate-spin text-indigo-600 text-center' />
    </div>
  );
};
