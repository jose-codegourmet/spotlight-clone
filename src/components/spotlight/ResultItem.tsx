import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';

interface ResultItemProps {
  key: string;
  image: string;
  title: string;
  type: string;
  className?: string;
}

const ResultItem: FC<ResultItemProps> = (props) => {
  const { key, image, title, type, className = '' } = props;

  const componentClass = twMerge('w-full p-2 flex items-center justify-between', className);

  return (
    <li key={key} className={componentClass}>
      <Image src={image} alt={title} width={50} height={50} className="rounded-full overflow-hidden bg-neutral-600 " />
      <span className=" text-black">{title}</span>
      <AiOutlineRight size={24} />
    </li>
  );
};

export default ResultItem;
