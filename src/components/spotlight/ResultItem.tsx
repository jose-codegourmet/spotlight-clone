import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';

interface ResultItemProps {
  image: string;
  title: string;
  type: string;
  className?: string;
  handleItemClick: () => void;
}

const ResultItem: FC<ResultItemProps> = (props) => {
  const { image, title, type, className = '', handleItemClick } = props;

  const componentClass = twMerge(
    `
    w-full
    p-2
    flex
    items-center
    justify-between
    cursor-pointer
    rounded-lg
    hover:bg-black
    hover:bg-opacity-5
    dark:hover:bg-white
    dark:hover:bg-opacity-5
    [&:not(:last-child)]:mb-5
  `,
    className,
  );

  return (
    <div className={componentClass} onClick={handleItemClick}>
      <Image src={image} alt={title} width={32} height={32} className="rounded-full overflow-hidden bg-neutral-600 " />
      <span>{title}</span>
      <span className="text-sm">
        <AiOutlineRight />
      </span>
    </div>
  );
};

export default ResultItem;
