import img1 from '../../public/app-dev.jpeg';
import img2 from '../../public/frontend.jpg';
import img3 from '../../public/backend.jpg';
import img4 from '../../public/web3.jpeg';

export const images: { path: string; title: string }[] = [
  { path: img1 as any, title: 'App Development' },
  { path: img2 as any, title: 'Frontend Development' },
  { path: img3 as any, title: 'Backend Development' },
  { path: img4 as any, title: 'Web3 Development' },
];

const imageByIndex = (index: number): { path: string; title: string } =>
  images[index % images.length];

export default imageByIndex;
