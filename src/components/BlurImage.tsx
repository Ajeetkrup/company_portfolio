'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function BlurImage({
  url,
  name,
}: {
  url: string;
  name: string;
  classNames?: string;
}) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      src={url}
      alt={name}
      width={500}
      height={500}
      quality={100}
      objectFit='contain'
      loading='eager'
      className={cn(
        `rounded-t-xl w-full object-fill h-60
              duration-700 ease-in-out group-hover/card:shadow-xl group-hover:opacity-75 hover:scale-105 hover:shadow-2xl
              ${isLoading ? 'blur-2xl backdrop' : 'blur-0 grayscale-0'})`,
        ''
      )}
      onLoad={() => setLoading(false)}
    />
  );
}
