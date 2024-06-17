import forex from '../../public/navbar/forex/forex.jpeg';
import webDev from '../../public/navbar/frontend.webp';
import mobDev from '../../public/navbar/app/app-ui.jpeg';
import { StaticImageData } from 'next/image';

export type ServiceType = {
  title: string;
  desc: string;
  imgUrl: StaticImageData;
  link: string;
};

export const services = [
  {
    title: 'Forex Trading',
    desc: 'Navigate the global markets! Learn the secrets of forex trading and unlock the potential for financial freedom.',
    imgUrl: forex,
    link: '/',
  },
  {
    title: 'Full Stack Web Development',
    desc: 'Master the web! Build seamless front-end experiences and robust back-end logic – the complete web package.',
    imgUrl: webDev,
    link: '/',
  },
  {
    title: 'Mobile App Development',
    desc: 'Bring your ideas to life! Craft stunning mobile apps for any platform and empower users on the go.',
    imgUrl: mobDev,
    link: '/',
  },

  {
    title: 'UI/UX Design',
    desc: 'Shape user journeys! Design intuitive interfaces and craft engaging experiences that keep users coming back.',
    imgUrl: mobDev,
    link: '/',
  },
  {
    title: 'Software Development',
    desc: 'Innovate through code! Build powerful software solutions that solve real-world problems and drive progress.',
    imgUrl: mobDev,
    link: '/',
  },
  {
    title: 'E-Commerce Development',
    desc: 'Take your store online! Build thriving e-commerce platforms and unlock the limitless potential of digital commerce.',
    imgUrl: mobDev,
    link: '/',
  },
  {
    title: 'Offshore Development',
    desc: 'Tap into global talent! Access skilled developers worldwide and unlock cost-effective solutions for your projects.',
    imgUrl: mobDev,
    link: '/',
  },
  {
    title: 'Blockchain Development',
    desc: 'Build the future! Master blockchain technology and revolutionize industries with secure, transparent solutions.',
    imgUrl: mobDev,
    link: '/',
  },
];
