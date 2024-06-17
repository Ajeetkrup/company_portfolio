import './globals.css';

import ContactUsPopOver from '@/components/ContactUsPopOver';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import NavBar from '@/components/Navbar/NavBar';
import NavMobileView from '@/components/Navbar/NavMobileView';
import { Roboto } from 'next/font/google';
import { cn } from '@/lib/utils';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GFXDev Solutions',
  description:
    'Empowering Solutions for Digital Excellence, Web and Mobile Development with ReactJs,NextJs Node.js, Express and MySQL, Future of Traders.',
  category: 'IT Solution Services & Forex Trading Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className=''>
      <body className={cn('transition-colors duration-50', roboto.className)}>
        <div className='xxs: hidden sm:hidden md:hidden lg:block relative z-50'>
          <NavBar />
        </div>
        <div className='xxs:block sm:block md:block lg:hidden cursor-pointer relative z-50'>
          <NavMobileView />
        </div>
        <div className='min-h-full w-full'>{children}</div>
        <Footer />
        <ContactUsPopOver />
      </body>
    </html>
  );
}
