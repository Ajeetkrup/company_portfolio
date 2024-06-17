import React from 'react';

type Props = {
  tags: string[];
};

const TagsList = ({ tags }: Props) => {
  return (
    <>
      <div className='flex flex-wrap justify-center gap-2 p-1 mt-2 text-xs cursor-default md:justify-start md:text-sm text-sh-white'>
        {tags?.map((tag, index) => (
          <div
            key={index}
            className='flex flex-wrap items-center bg-[#610C9F]/20 border-2 border-gray-500 rounded-lg px-1 py-1 hover:shadow-lg transition-transform transform ease-in hover:scale-105 cursor-default'
          >
            <div className='p-1 text-center rounded-md'>{tag}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TagsList;
