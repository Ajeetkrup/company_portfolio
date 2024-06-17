'use client';

import React, { useEffect, useState } from 'react';

const Counter = ({ endCount }: { endCount: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (count < endCount) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 300);
    }

    return () => clearInterval(intervalId); // Clear interval on unmount or when count reaches endCount
  }, [count, endCount]); // Re-run effect if count or endCount changes

  return (
    <div className='stats-counter'>
      <h3 id='stats-number'>{count}</h3>
    </div>
  );
};

export default Counter;
