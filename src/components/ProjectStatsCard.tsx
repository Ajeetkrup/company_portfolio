import Counter from './Counter';
import { FaProjectDiagram } from 'react-icons/fa';
import { GiRunningNinja } from 'react-icons/gi';
import { GrUserExpert } from 'react-icons/gr';
import { IoIosPerson } from 'react-icons/io';

const ProjectStatsCard = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-around w-screen space-y-4 md:space-y-0 p-8 bg-[#e0cbec]'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center rounded-lg bg-[#ff7bff] h-16 w-[6rem] animate-pulse mb-6'>
          <FaProjectDiagram className='w-10 h-10 text-[#ffff]' />
        </div>
        <div className='flex text-2xl text-[#a200ff] md:text-4xl font-semibold mb-1'>
          <Counter endCount={20} /> +
        </div>
        <div className='flex text-xl text-[#a200ff] md:text-2xl font-semibold'>
          Projects Completed
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center rounded-lg bg-[#ff7bff] h-16 w-[6rem] animate-pulse mb-6'>
          <IoIosPerson className='w-10 h-10 text-[#ffff]' />
        </div>
        <div className='flex text-2xl text-[#a200ff] md:text-4xl font-semibold mb-1'>
          <Counter endCount={10} /> +
        </div>
        <div className='flex text-xl md:text-2xl text-[#a200ff] font-semibold'>
          Happy Clients
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center rounded-lg bg-[#ff7bff] h-16 w-[6rem] animate-pulse mb-6'>
          <GiRunningNinja className='w-10 h-10 text-[#ffff]' />
        </div>
        <div className='flex text-2xl md:text-4xl text-[#a200ff] font-semibold mb-1'>
          <Counter endCount={11} /> +
        </div>
        <div className='flex text-xl md:text-2xl text-[#a200ff] font-semibold'>
          Running Project
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center rounded-lg bg-[#ff7bff] h-16 w-[6rem] animate-pulse mb-6'>
          <GrUserExpert className='w-10 h-10 text-[#ffff]' />
        </div>
        <div className='flex text-2xl md:text-4xl text-[#a200ff] font-semibold mb-1'>
          <Counter endCount={20} /> +
        </div>
        <div className='flex text-xl md:text-2xl text-[#a200ff] font-semibold'>
          IT Professionals
        </div>
      </div>
    </div>
  );
};

export default ProjectStatsCard;
